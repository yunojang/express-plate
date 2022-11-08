export class ModelBase {
    public toString() {
        return Object.entries(this)
            .map(([k, v]) => `[${k}]:${v}`)
            .join(" ");
    }
}
