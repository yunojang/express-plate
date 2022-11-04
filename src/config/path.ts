import path from "path";

export const resolveApp = (relative: string) => {
    return path.resolve(process.cwd(), relative);
};

export const paths = {
    env: resolveApp(".env"),
    envTest: resolveApp(".env.test"),
};
