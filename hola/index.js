module.exports = function (context, req) {

    // var category = context.bindingData.category;
    // var id = context.bindingData.id;

    // if (!id) {
    //     context.res = {
    //         // status: 200, /* Defaults to 200 */
    //         body: "All " + category + " items were requested."
    //     };
    // }
    // else {
    //     context.res = {
    //         // status: 200, /* Defaults to 200 */
    //         body: category + " item with id = " + id + " was requested."
    //     };
    // }
    context.res = {
      body: 'hola'
    }

    context.done();
}
