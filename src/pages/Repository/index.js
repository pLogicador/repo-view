import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Loading, Owner, BackButton, IssuesList } from "./styles";
import api from "../../services/api";
import { FaArrowLeft } from "react-icons/fa";

export default function Repository() {
  const { repo } = useParams();

  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [repositoryData, issuesData] = await Promise.all([
        api.get(`/repos/${repo}`),
        api.get(`/repos/${repo}/issues`, {
          params: {
            state: "open",
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
  }, [repo]);

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
    </Container>
  );
}
