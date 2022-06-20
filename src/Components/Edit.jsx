
import { useEffect, useState} from "react";

function Edit({ modalData, setModalData, setEditData }) {

    
    const [animal, setAnimal] = useState('');
    const [weight, setWeight] = useState('');

    const close = () => {
        setModalData(null);
    }

    useEffect(() => {
        if (null === modalData) {
            return;
        }
        setAnimal(modalData.animal);
        setWeight(modalData.weight);
        
    }, [modalData]);

    const edit = () => {
        setEditData({animal, weight, id: modalData.id});
        setModalData(null);
    }

    if (null === modalData) {
        return null;
    }

    return(
<div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit</h5>
                        <button type="button" className="close" onClick={close}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="form-group">
                        <label>Animal</label>
                        <input type="text" className="form-control" value={animal} onChange={e => setAnimal(e.target.value)}/>
                        <small className="form-text text-muted">Please enter some nice animal (small donkey etc.).</small>
                    </div>
                    <div className="form-group">
                        <label>Animal weight</label>
                        <input type="text" className="form-control" value={weight} onChange={e => setWeight(e.target.value)}/>
                        <small className="form-text text-muted">How much is the fish (Scooter).</small>
                    </div>
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" onClick={close}>Close</button>
                        <button type="button" className="btn btn-outline-primary" onClick={edit}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
    
}
export default Edit;