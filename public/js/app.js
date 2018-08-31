// Contact Form JS
class Contact extends Component {
    state = {
        name: "",
        email: "",
        phoneNumber: "",
        message: ""
    }

    handleSubmit = event => {

        event.preventDefault()

        axios.post("/mail", {
            name: this.state.name,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            message: this.state.message
        }).then(function (res) {
            console.log(res)
        }).catch(function (e) {
            console.log(e)
        })


        this.setState({
            name: "",
            email: "",
            phoneNumber: "",
            message: ""
        })
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change.
        let value = event.target.value;
        const name = event.target.name;
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };
}