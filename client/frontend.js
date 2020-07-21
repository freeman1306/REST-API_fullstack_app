import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

new Vue({

    // Initialize Vue app by id
    el: '#app',

    // Create data model for connecting with DOM
    data() {
        return {
            form: {
                name: '',
                value: ''
            },
            contacts: [
                {id: 1, name: 'Vladilen', value: '+7-921-100-20-30', marked: false}
            ]
        }
    },
    computed: {
        canCreate() {
            return this.form.value.trim() && this.form.name.trim()
        }
    },

    // Create methods for sending in DOM/components
    methods: {
        createContact() {
            const {
                ...contact
            } = this.form
           this.contacts.push({...contact, id: Date.now(), marked: false})

            this.form.name = this.form.value = ''
        },
        markContact(id) {
            const contact = this.contacts.find(c => c.id === id)
            contact.marked = true
        },
        removeContact(id) {
            this.contacts = this.contacts.filter(c => c.id !== id)
        }
    },
})