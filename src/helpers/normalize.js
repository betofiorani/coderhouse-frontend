import { schema, denormalize } from "normalizr";

export const desnormalizarMensajes = (mensajes) => {

    const author = new schema.Entity("author", {}, { idAttribute: "userEmail" })
    const message = new schema.Entity("message", { author: author }, { idAttribute: "_id" })
    const schemaMessages = new schema.Entity("messages", { messages:[message] })
    
    //Denormalizo mensajes
    const denormalizedMessages = denormalize(mensajes.result, schemaMessages, mensajes.entities )
    const finalMessages = denormalizedMessages.messages.map(msg => msg._doc)
    return finalMessages
}