
const uuidv1 = require('uuid/v1');
module.exports = function (source) {
    let reg = /\{(.|\n)*\}/
    let matchStuff = source.match(reg);
    if (matchStuff && matchStuff[0]) {
        // console.log("+++++++++++++++++++++")
        // // console.log(matchStuff[0].replace(/[\r\n]/g,""))
        // console.log(eval(`(function (){return${matchStuff[0]}})()`))
        // let myComponentOptions = eval(`(function (){return${matchStuff[0]}})()`)
        // if (module.hot) {
        //     const api = require('vue-hot-reload-api')
        //     const Vue = require('vue')

        //     // make the API aware of the Vue that you are using.
        //     // also checks compatibility.
        //     api.install(Vue)

        //     // compatibility can be checked via api.compatible after installation
        //     if (!api.compatible) {
        //         throw new Error('vue-hot-reload-api is not compatible with the version of Vue you are using.')
        //     }

        //     // indicate this module can be hot-reloaded
        //     module.hot.accept()
        //     let uuid = uuidv1()
        //     if (!module.hot.data) {
        //         // for each component option object to be hot-reloaded,
        //         // you need to create a record for it with a unique id.
        //         // do this once on startup.
        //         api.createRecord(uuid, myComponentOptions)
        //     } else {
        //         // if a component has only its template or render function changed,
        //         // you can force a re-render for all its active instances without
        //         // destroying/re-creating them. This keeps all current app state intact.
        //         api.rerender(uuid, myComponentOptions)

        //         // --- OR ---

        //         // if a component has non-template/render options changed,
        //         // it needs to be fully reloaded. This will destroy and re-create all its
        //         // active instances (and their children).
        //         //   api.reload('very-unique-id', myComponentOptions)
        //     }
        // }
        return source;
    }else {
        console.log("-----------------------------------")
        // throw new Error("your vue component with jsx may be have a syntax error")
    }

}