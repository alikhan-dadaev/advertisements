import React, {useState} from 'react';




function App(props) {
    const [advertisement, setAdvertisement] = useState(
        [
            {price: 100, name: "Купить машину", active: true},
            {price: 100, name: "Купить машину", active: true}
        ]
    );

    const [priceField, setPriceField] = useState()
    const [nameField, setNameField] = useState()
    const [checkField, setCheckField] = useState()

    const priceHandleChange = (e) => {
        setPriceField(e.target.value)
    }

    const nameHandleChange = (e) => {
        setNameField(e.target.value)
    }

    const checkHandleChange = (e) => {
        setCheckField(!checkField)
    }
    const handleClick = () => {
        const newAdvets = {
            price: priceField,
            name: nameField,
            active: checkField
        }
        setAdvertisement([
                ...advertisement,
                newAdvets
        ]);
        setNameField('');
        setPriceField('');
    }

    const deleteAdvertisement = (deleteItem) => {
        const filteredAdvertisement = advertisement.filter((item, index) => {
            if (index === deleteItem) {
                return false
            }

            return true
        })

        setAdvertisement(filteredAdvertisement)
    }

    const changeClass = (changeItem) => {
        const changedClass = advertisement.map((item, index) =>{
            if (changeItem===index){
                return {
                    ...item,
                    active: !item.active
                }
            }

            return item
        })
        setAdvertisement(changedClass)
    }




    return (
        <div className="container w-50">
            <div className="d-flex justify-content-between mt-3 mb-5">
                <input
                    type="number"
                    placeholder="Цена"
                    value={priceField}
                    onChange={priceHandleChange}
                />
                <input
                    type="text"
                    placeholder="Название"
                    value={nameField}
                    onChange={nameHandleChange}
                />
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={checkField}
                    onChange={checkHandleChange}
                />
                <button className="btn-primary" onClick={handleClick}>Доабваить</button>
            </div>
            <div>
                <ul className="list-group">
                    {advertisement.map((item, index) => {
                        return(
                            <li className= {`${item.active ? '' : 'changeStyleClass'} list-group-item d-flex justify-content-between align-items-center`}>
                                <div>
                                    {item.price}
                                </div>
                                <div>
                                    {item.name}
                                </div>
                                <div className="activeClass" onClick={()=> changeClass(index)}>
                                    {item.active ? 'активное' : 'скрыто'}
                                </div>
                                <div>
                                    <button className="btn btn-danger" onClick={() => deleteAdvertisement(index)}>
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </li>
                        )
                    })}
                </ul>


            </div>
        </div>
    )
}

export default App;