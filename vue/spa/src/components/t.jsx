import css from "../assets/1.css"
export default {
    name: "t",
    created() {
        console.log(css)
        console.log('here is a t.jsx')
    },
    data() {
        return {
            time: 15211
        }
    },
    methods: {
        increment() {
            fetch("/a?name=hugs").then(response=> {
                console.log(response.status);
                return response.json()
            }).then(data=> {
                console.log(data)
            }).catch(err=> {
                console.error(err);
            })
        },
        post() {
            fetch("/post",{method: "POST"}).then(response=> {
                
            })
        }
    },
    render() {
        return (
            <div class={css.t}>{this.$store.state.count}
                <span>{this.time}</span>
                <button onClick={this.increment.bind(this)}>点我</button>
                <button onClick={this.post.bind(this)}>post</button>
            </div>
        )
    }
}
