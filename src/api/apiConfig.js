const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '1c108f1c5884d98f273cb43ff1b928fd',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;