import { join } from "path";

export function getOsEnv(key: string): string {
    if (typeof process.env[key] === "undefined") {
        throw new Error(`Environment variable ${key} is not set.`);
    }

    return process.env[key] as string;
}

export function getPath(path: string): string {
    return process.env.NODE_ENV === "production"
        ? join(
              process.cwd(),
              path.replace("src", "dist").slice(0, -3).concat(".js")
          )
        : join(process.cwd(), path);
}

export function getPaths(paths: string[]): string[] {
    return paths.map((p) => getPath(p));
}

export function getOsPath(key: string): string {
    return getPath(getOsEnv(key));
}
