


class Response{
    constructor(Status , StatusCode , Message , Data){
        (this.Status = Status),
        (this.StatusCode = StatusCode),
        (this.Message = Message),
        (this.Data = Data)
    }
}

module.exports = Response