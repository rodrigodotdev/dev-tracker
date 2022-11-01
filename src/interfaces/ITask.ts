import IProject from "./IProject";

export default interface ITask {
    id: number;
    project_id?: number;
    name: string;
    time_in_sec: number;
}