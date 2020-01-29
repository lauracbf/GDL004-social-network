export default () => {
    const notFound = `
        <h1> Page Not Found </h1>
    `;

    const divNotFound = document.createElement('div');
    divNotFound.innerHTML = notFound;
    return divNotFound;
}