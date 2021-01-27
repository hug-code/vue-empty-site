if (process.env.NODE_ENV === 'development'){
    var Mock = require('mockjs');
    import('./public')
    import('./article')

    Mock.setup({
        timeout: '300-800' // setter delay time
    })

    console.log('Using mock data')
}
