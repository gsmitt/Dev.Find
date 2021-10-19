import './styles.css';
import React, { useEffect, useState } from 'react';
import { api } from "../../services/api";
import date from 'date-and-time';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export function Dashboard() {
    let [data, setData] = useState({
        filter: "",
        offset: 0,
        target: "post",
        count: 0
    });


    async function load(target, value) {
        try {
            const get = (await api.get(`/${target}/getMany/${data.filter ? data.filter : "nullValue"}/${value}`)).data;
            console.log(get)
            setData(prevData => ({ ...prevData, count: get.count }));
            const container = document.querySelector(".cards-container")
            container.innerHTML = ""


            target == "post" ?

                (() => {
                    for (let i of get.list) {
                        let div = document.createElement("div")
                        div.classList.add("card--2")

                        let h3 = document.createElement("h3")
                        h3.classList.add("titulow")
                        h3.innerHTML = i.title.substring(0, 18)
                        if (i.title != h3.innerHTML) {
                            h3.innerHTML += "...";
                        }

                        let img = document.createElement("img")
                        img.src = i.image
                        if (i.image) {
                        } else {
                            let imgPadrao = document.createElement("img")
                            imgPadrao = "https://uploaddeimagens.com.br/images/003/482/514/original/postvazio.png?1634321165"
                            img.src = imgPadrao;
                        }
                        div.appendChild(img)
                        img.classList.add("imageee-")

                        let br = document.createElement("br")




                        let p = document.createElement("p")
                        p.classList.add("subtituloww")
                        p.innerHTML = i.description



                        div.appendChild(h3)

                        div.appendChild(br)
                        div.appendChild(p)

                        let div2 = document.createElement("div")
                        div2.classList.add("div2-style")

                        let imgUser = document.createElement("img")
                        imgUser.src = i.user.avatar;
                        imgUser.classList.add("user");
                        imgUser.classList.add("img-user")


                        if (i.user.avatar == null) {
                            let imgPadrao3 = document.createElement("img")
                            imgPadrao3 = "https://uploaddeimagens.com.br/images/003/490/495/thumb/useravatar-----.png?1634584859"
                            imgUser.src = imgPadrao3;
                        } else {
                            imgUser.src = i.user.avatar
                        }


                        div2.appendChild(imgUser)


                        let titleUser = document.createElement("a")
                        titleUser.innerHTML = i.user.name;
                        titleUser.href = "/perfil-usuario/" + i.user_id
                        titleUser.classList.add("user");
                        titleUser.classList.add("title-user")

                        let subtitleUser = document.createElement("small")
                        subtitleUser.innerHTML = i.updatedAt;


                        subtitleUser.classList.add("user");
                        subtitleUser.classList.add("sub-user")




                        div2.appendChild(titleUser)

                        div2.appendChild(subtitleUser)
                        div.appendChild(div2)



                        container.appendChild(div)

                    }
                })() :
                (() => {
                    for (let i of get.list) {

                        let div = document.createElement("div")
                        div.classList.add("card--2")



                        let a = document.createElement("a")
                        a.classList.add("title--user")
                        a.innerHTML = i.name
                        a.href = "/perfil-usuario/" + i.id

                        let imgUser2 = document.createElement("img");
                        imgUser2.src = i.avatar;
                        imgUser2.classList.add("img-user2")

                        if (i.avatar == null) {
                            let imgPadrao2 = document.createElement("img")
                            imgPadrao2 = "https://uploaddeimagens.com.br/images/003/490/495/thumb/useravatar-----.png?1634584859"
                            imgUser2.src = imgPadrao2;
                        }




                        div.appendChild(imgUser2)

                        div.appendChild(a)

                        container.appendChild(div)
                    }
                })()
        } catch (err) {
            console.log(err);
        }
    }

    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        setData(prevData => ({ ...prevData, [name]: value }));
    }

    async function handleSelector(e) {
        const value = e.target.id
        setData(prevData => ({ ...prevData, target: value, offset: 0 }));
        load(e.target.id, 0)
    }

    async function handleArrows(e) {
        const direction = e.target.id
        const value = 6
        let val2 = data.offset
        if (direction == "back" && data.offset - value >= 0) {
            val2 -= 6
            setData(prevData => ({ ...prevData, offset: prevData.offset - value }));
        }
        if (direction == "forward" && data.offset + value < data.count) {
            val2 += 6
            setData(prevData => ({ ...prevData, offset: prevData.offset + value }));
        }
        
        load(data.target, val2)
    }

    return (
        <div className="dashboard">
            <div className="type-selector">
                <div className={`selector-element ${data.target == "post" ? "selected-element" : ""}`} onClick={handleSelector} id="post">Projetos</div>
                <div className={`selector-element ${data.target == "user" ? "selected-element" : ""}`} onClick={handleSelector} id="user">Desenvolvedores</div>

            </div>

            <form className="flex-form" onSubmit={(e) => { e.preventDefault() }}>
                <input type="search" placeholder="O que você deseja?" name="filter" onChange={handleChange} value={data.filter}>
                </input>
                <input type="submit" value="Pesquisar" onClick={(e) => { load(data.target) }}>
                </input>
            </form>
            <div className="cards-container"></div>
            <div className="centralizer">
                <ul className="nav-buttons">
                    <li id="back" onClick={(e) => { handleArrows(e) }}>
                        <FaChevronLeft color="#ff9900" fontSize="inherit" id="back" />
                    </li>
                    <li>
                        <p>
                            {`${Math.floor(data.offset / 6) + 1}`}
                        </p>
                    </li>
                    <li id="forward" onClick={(e) => { handleArrows(e) }}>
                        <FaChevronRight color="#ff9900" fontSize="inherit" id="forward" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;