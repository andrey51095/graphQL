import { createBrowserHistory } from 'history';
import url from 'url';

const history = createBrowserHistory();
export default history;

export const getQ = () => url.parse(history.location.search);

export const mainUrl = '/';
export const tasksUrl = '/tasks';
export const taskUrl = '/task';
export const createTask = '/crate-task';
