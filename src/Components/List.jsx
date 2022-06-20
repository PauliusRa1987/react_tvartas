import { useContext } from "react";
import DataContext from "./DataContext";

function List() {

    const { animals } = useContext(DataContext);
    const {setDeleteData} = useContext(DataContext);
    const {setModalData} = useContext(DataContext);

   
 
    return (
        <div className="col-7">
            <div className="card mt-4">
                <div className="card-header">
                    <h2>List</h2>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {
                            animals.map(a => <li className="list-group-item" key={a.id}><b>{a.animal}</b> weight: {a.weight} kg<button type="button" className="btn btn-outline-danger ml-2" onClick={() => setDeleteData(a.id)}>Delete</button>
                            <button type="button" className="btn btn-outline-success ml-2" onClick={ () => setModalData(a)}>Edit</button>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default List;
