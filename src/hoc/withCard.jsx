import React from 'react';

const withCard = (WrappedComponent, title="not provided", card_header="card-primary") => {
    const Wrapped = (props) => {
        return (
            <div class={`card ${card_header}`}>
                <div className="card-header">
                    <h3 className="card-title">{title}</h3>
                    <div class="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="card-refresh" data-source="widgets.html" data-source-selector="#card-refresh-content" data-load-on-init="false">
                            <i class="fas fa-sync-alt"></i>
                        </button>
                        <button type="button" className="btn btn-tool" data-card-widget="maximize">
                            <i class="fas fa-expand"></i>
                        </button>
                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                            <i class="fas fa-minus"></i>
                        </button>
                        <button type="button" className="btn btn-tool" data-card-widget="remove">
                            <i className="fas fa-times"></i>
                        </button>
                        </div>
                        {/*-- /.card-tools --*/}
                </div>
                <div className="card-body">
                        <WrappedComponent />
                </div>
            </div>
        );
    }
    return Wrapped ;
}

export default withCard;
