export default {
    name: "lazy",
    data() {
        return {
            time: 5111
        }
    },
    render() {
        return (
            <div >lazy loading...{this.time}</div>
        )
    }
}