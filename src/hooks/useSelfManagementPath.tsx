import React, { useState, useEffect } from "react";

export type Route = {
  path: string;
  component: React.ComponentType<any>;
};

const matchPath = (
  path: string,
  url: string
): { [key: string]: string } | null => {
  const pathParts = path.split("/").filter(Boolean);
  const urlParts = url.split("/").filter(Boolean);

  if (pathParts.length !== urlParts.length) return null;

  const params = pathParts.reduce<{ [key: string]: string } | null>(
    (acc, part, index) => {
      if (acc === null) return null;

      if (part.startsWith(":")) {
        acc[part.slice(1)] = urlParts[index];
      } else if (part !== urlParts[index]) {
        return null;
      }
      return acc;
    },
    {}
  );

  return params;
};

export type RouterProps = {
  routes: Route[];
  url: string;
  Page404: React.ComponentType<any>;
};

export const SelfManagementRouter: React.FC<RouterProps> = ({
  routes,
  url,
  Page404 = () => <div>Hello</div>,
}) => {
  for (const route of routes) {
    const params = matchPath(route.path, url);
    if (params) {
      const Component = route.component;
      return <Component {...params} />;
    }
  }

  return <Page404 />;
};

export const useSelfManagementPath = () => {
  const [url, setUrl] = useState("#");

  useEffect(() => {
    console.log(window?.location);

    setUrl(window?.location?.hash?.substring(1));
  }, []);

  const getLinkProps = (path: string) => {
    return {
      href: `#${path}`,
      onClick: () => setUrl(path),
    };
  };

  return {
    url,
    setUrl,
    getLinkProps,
  };
};
