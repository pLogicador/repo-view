import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Loading,
  Owner,
  BackButton,
  IssuesList,
  PageAction,
  FilterList,
} from "./styles";
import api from "../../services/api";
import { FaArrowLeft } from "react-icons/fa";

export default function Repository() {
  const { repo } = useParams();

  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const [filters, setFilters] = useState([
    { state: "all", label: "All", active: true },
    { state: "open", label: "Open", active: false },
    { state: "closed", label: "Closed", active: false },
  ]);
  const [filterIndex, setFilterIndex] = useState(0);

  useEffect(() => {
    async function load() {
      const [repositoryData, issuesData] = await Promise.all([
        api.get(`/repos/${repo}`),
        api.get(`/repos/${repo}/issues`, {
          params: {
            state: filters.find((f) => f.active).state,
            per_page: 5,
          },
        }),
      ]);

      setRepository(repositoryData.data);
      setIssues(issuesData.data);
      //console.log(issuesData.data);
      setLoading(false);
    }

    load();
  }, [filters, repo]);

  useEffect(() => {
    async function loadIssue() {
      const response = await api.get(`/repos/${repo}/issues`, {
        params: {
          state: filters[filterIndex].state,
          page,
          per_page: 5,
        },
      });

      setIssues(response.data);
      //console.log(filterIndex);
    }

    loadIssue();
  }, [filterIndex, filters, page, repo]);

  function handlePage(action) {
    setPage(action === "back" ? page - 1 : page + 1);
  }

  function handleFilter(index) {
    setFilterIndex(index);
  }

  if (loading) {
    return (
      <Loading>
        <h1>Loading...</h1>
      </Loading>
    );
  }

  return (
    <Container>
      <BackButton to="/">
        <FaArrowLeft color="#FFF" size={30} />
      </BackButton>

      <Owner>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        <h1>{repository.name}</h1>
        <p>{repository.description}</p>
      </Owner>

      <FilterList $active={filterIndex}>
        {filters.map((filter, index) => (
          <button
            type="button"
            key={filter.label}
            onClick={() => handleFilter(index)}
          >
            {filter.label}
          </button>
        ))}
      </FilterList>

      <IssuesList>
        {issues.map((issue) => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />
            <div>
              <strong>
                <a href={issue.html_url}>{issue.title}</a>

                {issue.labels.map((label) => (
                  <span key={String(label.id)}>{label.name}</span>
                ))}
              </strong>

              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IssuesList>

      <PageAction>
        <button
          type="button"
          onClick={() => handlePage("back")}
          disabled={page < 2}
        >
          Back
        </button>
        <button type="button" onClick={() => handlePage("next")}>
          Next
        </button>
      </PageAction>
    </Container>
  );
}
