export const skillGroups = [
  {
    category: "Frontend",
    color: "blue",
    items: [
      "TypeScript",
      "JavaScript (ES6+)",
      "React",
      "Angular",
      "Next.js",
      "HTML5",
      "SCSS",
      "CSS3",
      "Tailwind CSS",
      "RxJS",
      "Angular Material",
      "Material UI",
      "Syncfusion",
      "Webpack",
      "Babel",
      "Vite",
      "ESLint",
      "Prettier",
    ],
  },
  {
    category: "Backend",
    color: "green",
    items: [
      "Node.js (Express)",
      "Java (Spring Boot)",
      "REST APIs",
      "GraphQL APIs",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    category: "Testing",
    color: "rose",
    items: [
      "Jest",
      "Playwright",
      "React Testing Library",
      "Protractor",
      "JUnit",
      "TDD",
    ],
  },
  {
    category: "DevOps & Cloud",
    color: "amber",
    items: [
      "AWS (EC2, S3, Lambda, CloudWatch, ECS)",
      "GCP (GCE, IAM, Cloud Build, Cloud Run)",
      "Docker",
      "GitHub Actions",
      "Jenkins",
      "Tekton",
    ],
  },
  {
    category: "Tools",
    color: "slate",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Postman",
      "Jira",
      "Rally",
      "SonarQube",
      "Dynatrace",
      "FOSSA",
      "IntelliJ",
      "VS Code",
      "WebStorm",
    ],
  },
  {
    category: "Practices & Security",
    color: "purple",
    items: [
      "Agile",
      "CI/CD",
      "Code Reviews",
      "Clean Code",
      "SOLID Principles",
      "OAuth 2.0",
      "ADFS",
      "JWT",
      "Role-Based Access Control (RBAC)",
    ],
  },
];

export const techColorMap: Record<string, string> = skillGroups.reduce(
  (map, group) => {
    for (const item of group.items) {
      map[item] = group.color;
      const shortName = item.split(" (")[0].trim();
      if (!map[shortName]) {
        map[shortName] = group.color;
      }
    }
    return map;
  },
  {} as Record<string, string>,
);
