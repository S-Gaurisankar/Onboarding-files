
document.getElementById('btn').onclick = () => {
    console.log("Button clicked!");
    let name = document.getElementById('name').value;
    console.log(name);
    document.getElementById('greet-text').textContent = "Hello "+name;
}