const url = "https://localhost:5001/api/beanvariety/";

export  const getAllBeanVarieties = () => {
    return fetch(url).then(resp => resp.json());
}