import Link from 'next/link';

export default function BreadCrumbsMandatory(props) {
  const { Img, Title, subTitle } = props;

  const breadCrumbsStyle = {
    backgroundImage: `url(${Img ? Img : '/img/breadcrumb/mandat.png'})`,
  };

  return (
    <div
      className="it-breadcrumb-area it-breadcrumb-bg"
      style={breadCrumbsStyle}
    >
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="it-breadcrumb-content z-index-3 text-center">
              <div className="it-breadcrumb-title-box">
                <h3 className="it-breadcrumb-title">
                  {Title ? Title : 'Mandatory Disclosure'}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
