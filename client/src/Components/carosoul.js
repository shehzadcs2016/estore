import React from "react";
import {
  MDBCarousel,
  MDBMask,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";
const CarouselPage = (props) => {
  

  if (props.photo) {
    return (
      <div>
        <MDBContainer>
          <MDBCarousel
            activeItem={1}
            color={"blue"}
            length={props.photo.length}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
          // slide
          >
            <MDBCarouselInner>
              {props.photo &&
                props.photo.map((photo, i) => (
                  <MDBCarouselItem itemId={i + 1}>
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src={`http://localhost:3000/${photo.path}`}
                        alt="First slide"
                      />
                      <MDBMask overlay="black-light" />
                    </MDBView>
                    <MDBCarouselCaption>
                      <h3 className="h3-responsive text-light">
                      </h3>
                    </MDBCarouselCaption>
                  </MDBCarouselItem>
                ))}
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
        
      </div>
    );
  }
  return <div>loading.....</div>
};

export default CarouselPage;
