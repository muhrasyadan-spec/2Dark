const form = document.getElementById("sellerForm");
const table = document.getElementById("sellerTable");

let sellers = JSON.parse(localStorage.getItem("sellers")) || [];

renderData();

form.addEventListener("submit", function(e){
    e.preventDefault();

    const seller = {
        nama: document.getElementById("nama").value,
        hp: document.getElementById("hp").value,
        harga: document.getElementById("harga").value,
        minuman: document.getElementById("minuman").value
    };

    sellers.push(seller);

    localStorage.setItem(
        "sellers",
        JSON.stringify(sellers)
    );

    form.reset();

    renderData();
});

function renderData(){
    table.innerHTML = "";

    sellers.forEach((seller,index)=>{

        table.innerHTML += `
        <tr>
            <td>${seller.nama}</td>
            <td>${seller.hp}</td>
            <td>${seller.harga}</td>
            <td>${seller.minuman}</td>
            <td>
                <button
                    class="delete-btn"
                    onclick="hapusData(${index})">
                    Hapus
                </button>
            </td>
        </tr>
        `;
    });
}

function hapusData(index){
    sellers.splice(index,1);

    localStorage.setItem(
        "sellers",
        JSON.stringify(sellers)
    );

    renderData();
}
