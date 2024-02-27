import { FastifyInstance } from "fastify";
import { request } from "http";
import { connect } from "http2";

export async function pollResults(app: FastifyInstance) {
    app.get('/polls/:pollId/results', {websocket: true}, (connection, request) => {
        
    })
}