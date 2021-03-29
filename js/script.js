var app = new Vue ({
    el: "#root",
    
    data: {
        emails: [],
        contatore: 0,

    },

    created () {
        const emails = this.emails;
        var contatore = this.contatore;
        for (var i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function (request) {
                emails.push(request.data.response); 
                contatore+= 1;     
                })
        }
    }
})