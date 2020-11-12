import React from 'react'
import {Link} from "react-router-dom"

export const NosotrosPage = () => {
    return (
        <div>
            <h1>About us</h1>
            <div className="">
                <Link to="/quienes-somos" className="nav-link active">¿Quienes somos?</Link>
                <Link to="/objetivo" className="nav-link active">Nuestro objetivo</Link>
                <Link to="/contacto" className="nav-link active">Contacto</Link>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-7">
                    <h2>¿Quienes somos?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quibusdam eos qui tenetur, porro aliquid. Incidunt architecto, esse illo iure praesentium dolorem quae voluptate quaerat enim recusandae, cumque blanditiis maiores!
                    Asperiores perferendis temporibus sequi quia eligendi. Amet necessitatibus commodi doloribus quia est magni nobis incidunt mollitia enim, velmagnam id iste doloribus architecto eligendi sit quidem necessitatibus.
                    Pariatur omnis repellat esse minus delectus ipsam ipsa, ut optio nesciunt doloremque aliquid, reiciendis, dolor consectetur qui animi earum commodi odio maxime dicta aspernatur. Dignissimos voluptate ad molestiae placeat a.
                    </p>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-7">
                    <h3>Nuestro objetivo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quibusdam eos qui tenetur, porro aliquid. Incidunt architecto, esse illo iure praesentium dolorem quae voluptate quaerat enim recusandae, cumque blanditiis maiores!
                    Asperiores perferendis temporibus sequi quia eligendi. Amet necessitatibus commodi d</p>
                    </div>
                </div>
                <div className="col-7">
                    <h2>Contacto</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quibusdam eos qui tenetur, porro aliquid. Incidunt architecto, esse illo iure praesentium dolorem quae voluptate quaerat enim recusandae, cumque blanditiis maiores!
                    Asperiores perferendis temporibus sequi quia eligendi. Amet necessitatibus commodi doloribus quia est magni nobis incidunt mollitia enim, velmagnam id iste doloribus architecto eligendi sit quidem necessitatibus.
                    Pariatur omnis repellat esse minus delectus ipsam ipsa, ut optio nesciunt doloremque aliquid, reiciendis, dolor consectetur qui animi earum commodi odio maxime dicta aspernatur. Dignissimos voluptate ad molestiae placeat a.
                    </p>
                </div>
            </div>
            <div className="col-md-12 text-center mb-5 mt-5">
                <button type="submit" className="btn btn-primary text-justify p-2">
                    Solicitar ayuda
                </button>
            </div>
        </div>
    )
}
