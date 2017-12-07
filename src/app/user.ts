export class User {
    constructor (
        public login : string = "",
        public public_repos : number = 0,
        public followers : number = 0,
        public following : number = 0
    ){}
}
