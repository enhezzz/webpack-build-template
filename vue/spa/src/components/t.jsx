import "../assets/1.css"
export default {
    name: "t",
    created() {
        console.log('here is a t.jsx')
    },
    data() {
        return {
            time: 15211
        }
    },
    methods: {
        increment() {
            this.time++;
        }
    },
    render() {
        return (
            <div class="t">{this.$store.state.count}
                <span>{this.time}</span>
                <button onClick={this.increment.bind(this)}>点我</button>
            </div>
        )
    }
}
