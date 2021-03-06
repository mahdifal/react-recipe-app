import React, { Component } from 'react'

export default class index extends Component {
    render() {
        const { handleChange, search } = this.props;
        return (

            <div className={`container`}>
                <div className="row mt-5">
                    <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                        <h2>
                            جستجوی دستور پخت غذا با
                        </h2>
                        <h1>
                            <strong className="text-orange font-logo display-3 ml-4">ببین و بپز</strong>
                            <i className="fas fa-utensils fa-lg text-orange"></i>
                        </h1>
                        <form className="mt-4">

                            <div className="input-group">
                                <input
                                    type="text"
                                    name="search"
                                    className="form-control form-control-lg"
                                    placeholder="نوع غذا را تایپ کنید ..."
                                    value={search}
                                    onChange={handleChange}
                                />

                                <div className="input-group-prepend">
                                    <button
                                        type="submit"
                                        className="input-group-text bg-primary"
                                    >
                                        <i className="fas fa-search" style={{ color: 'white' }} />
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
