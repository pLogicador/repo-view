import React, { useCallback, useEffect, useState } from "react";
import { Container, DeleteButton, Form, List, SubmitButton } from "./styles";
import { FaBars, FaGithub, FaPlus, FaSpinner, FaTrash } from "react-icons/fa";

import api from "../../services/api";
import { Link } from "react-router-dom";

export default function Main() {
  // States
  const [newRepo, setNewRepo] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState(null);

  // Search
  useEffect(() => {
    const repoStorage = localStorage.getItem("repos");

    if (repoStorage) {
      setRepositories((prev) => [...prev, ...JSON.parse(repoStorage)]);
    }
  }, []);

  // Save changes
  useEffect(() => {
    localStorage.setItem("repos", JSON.stringify(repositories));
  }, [repositories]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      async function submit() {
        setLoading(true);
        setWarning(null);
        try {
          if (newRepo === "") {
            throw new Error("You need to search for a repository");
          }

          const response = await api.get(`repos/${newRepo}`);
          const hasRepo = repositories.find((repo) => repo.name === newRepo);
          if (hasRepo) {
            throw new Error(
              "This repository has already been added to your list"
            );
          }

          const data = {
            name: response.data.full_name,
          };

          setRepositories((prevRepositories) => [...prevRepositories, data]);
          setNewRepo("");
        } catch (error) {
          setWarning(true);
          console.log(error);
        } finally {
          setLoading(false);
        }
      }

      submit();
    },
    [newRepo, repositories]
  );

  function handleInputChange(e) {
    setNewRepo(e.target.value);
    setWarning(null);
  }

  const handleDelete = useCallback(
    (repo) => {
      const find = repositories.filter((r) => r.name !== repo);
      setRepositories(find);
    },
    [repositories]
  );

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        My Repo
      </h1>

      <Form onSubmit={handleSubmit} $error={warning}>
        <input
          type="text"
          placeholder="Add repositories"
          value={newRepo}
          onChange={handleInputChange}
        />

        <SubmitButton $loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositories.map((repo) => (
          <li key={repo.name}>
            <span>
              <DeleteButton onClick={() => handleDelete(repo.name)}>
                <FaTrash size={16} />
              </DeleteButton>
              {repo.name}
            </span>

            <Link to={`/repo/${encodeURIComponent(repo.name)}`}>
              <FaBars size={25} />
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
}
