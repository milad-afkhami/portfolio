import get from "lodash-es/get";



const __get = (object, path) => (path ? get(object, path) : object);

            export default __get;