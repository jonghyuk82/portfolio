import React from "react";
import axios from "axios";
import GithubContext from "./GithubContext";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase.config";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

export const getProjectLists = async () => {
  try {
    const projectsRef = collection(db, "projects");

    // Create a query
    const q = query(projectsRef, orderBy("displayName", "asc"), limit(6));

    // Execute query
    const querySnap = await getDocs(q);

    const dbProjects = [];

    querySnap.forEach((doc) => {
      // console.log(doc.data());
      return dbProjects.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    const apiResponse = await github.get(`/users/jonghyuk82/starred`);
    const apiRepos = apiResponse.data;
    // merge

    const projects = [];

    dbProjects.forEach((project) => {
      const matching = apiRepos.find((repo) => repo.name === project.data.name);
      if (matching) {
        projects.push({
          id: matching.id,
          uid: project.id,
          name: matching.name,
          displayName: project.data.displayName,
          url: matching.html_url,
          imgUrls: project.data.imgUrls,
          demoUrl: project.data.demoUrl,
          description: project.data.description,
        });
      }
    });

    return projects;
  } catch (error) {
    console.log(error);
  }
};

// export const getRepos = async () => {
//   const response = await github.get(`/users/jonghyuk82/starred`);
//   return response.data;
// };

// export const getProjectLists = async () => {
//   try {
//     const projectsRef = collection(db, "projects");

//     // Create a query
//     const q = query(projectsRef, orderBy("displayName", "asc"), limit(6));

//     // Execute query
//     const querySnap = await getDocs(q);

//     const dbProjects = [];

//     querySnap.forEach((doc) => {
//       // console.log(doc.data());
//       return dbProjects.push({
//         id: doc.id,
//         data: doc.data(),
//       });
//     });
//   } catch (error) {}
// };
