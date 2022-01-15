import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { Icon } from "@chakra-ui/react";

const SVG = () => {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
     width="39pt" height="60pt" viewBox="0 0 132.000000 204.000000"
     preserveAspectRatio="xMidYMid meet">
    <metadata>
    Created by potrace 1.16, written by Peter Selinger 2001-2019
    </metadata>
    <g transform="translate(0.000000,204.000000) scale(0.100000,-0.100000)"
    fill="#ffffff" fillOpacity="100%">
    <path d="M126 2018 c-8 -13 -40 -63 -71 -113 l-56 -90 29 -3 29 -3 5 -127 c6
    -151 25 -213 95 -316 80 -118 192 -184 349 -207 l74 -11 0 -59 0 -59 -145 0
    -145 0 0 -85 0 -85 145 0 145 0 0 -235 0 -235 79 0 78 0 7 39 c13 86 128 181
    218 181 30 0 46 -7 69 -29 64 -65 19 -181 -122 -316 -89 -85 -193 -141 -367
    -199 -78 -26 -112 -42 -112 -53 0 -19 46 -15 192 16 289 62 504 199 573 364
    40 95 4 241 -72 291 -97 64 -257 57 -333 -14 -18 -17 -36 -30 -41 -30 -5 0 -9
    50 -9 110 l0 110 145 0 145 0 0 85 0 85 -145 0 -145 0 0 59 0 60 48 6 c81 10
    165 35 218 65 76 44 159 137 202 227 36 76 37 82 42 218 l5 140 32 5 32 5 -69
    110 c-38 60 -73 111 -77 112 -7 2 -143 -208 -143 -221 0 -3 14 -6 30 -6 l30 0
    0 -92 c-1 -152 -28 -233 -107 -311 -55 -56 -118 -87 -190 -94 l-53 -6 0 252 0
    251 30 0 c17 0 30 3 30 6 0 9 -134 223 -140 223 -5 0 -131 -200 -138 -220 -2
    -4 9 -9 25 -11 l28 -3 3 -247 2 -248 -39 0 c-106 0 -227 85 -278 195 -24 53
    -28 74 -31 183 l-4 122 32 0 32 0 -23 38 c-13 22 -44 73 -69 115 -25 42 -48
    76 -52 77 -4 0 -14 -10 -22 -22z"/>
    </g>
    </svg>
  )
}

const SVGtransparent = () => {

  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
     width="39pt" height="60pt" viewBox="0 0 132.000000 204.000000"
     preserveAspectRatio="xMidYMid meet">
    <metadata>
    Created by potrace 1.16, written by Peter Selinger 2001-2019
    </metadata>
    <g transform="translate(0.000000,204.000000) scale(0.100000,-0.100000)"
    fill="#ffffff" fillOpacity="40%">
    <path d="M126 2018 c-8 -13 -40 -63 -71 -113 l-56 -90 29 -3 29 -3 5 -127 c6
    -151 25 -213 95 -316 80 -118 192 -184 349 -207 l74 -11 0 -59 0 -59 -145 0
    -145 0 0 -85 0 -85 145 0 145 0 0 -235 0 -235 79 0 78 0 7 39 c13 86 128 181
    218 181 30 0 46 -7 69 -29 64 -65 19 -181 -122 -316 -89 -85 -193 -141 -367
    -199 -78 -26 -112 -42 -112 -53 0 -19 46 -15 192 16 289 62 504 199 573 364
    40 95 4 241 -72 291 -97 64 -257 57 -333 -14 -18 -17 -36 -30 -41 -30 -5 0 -9
    50 -9 110 l0 110 145 0 145 0 0 85 0 85 -145 0 -145 0 0 59 0 60 48 6 c81 10
    165 35 218 65 76 44 159 137 202 227 36 76 37 82 42 218 l5 140 32 5 32 5 -69
    110 c-38 60 -73 111 -77 112 -7 2 -143 -208 -143 -221 0 -3 14 -6 30 -6 l30 0
    0 -92 c-1 -152 -28 -233 -107 -311 -55 -56 -118 -87 -190 -94 l-53 -6 0 252 0
    251 30 0 c17 0 30 3 30 6 0 9 -134 223 -140 223 -5 0 -131 -200 -138 -220 -2
    -4 9 -9 25 -11 l28 -3 3 -247 2 -248 -39 0 c-106 0 -227 85 -278 195 -24 53
    -28 74 -31 183 l-4 122 32 0 32 0 -23 38 c-13 22 -44 73 -69 115 -25 42 -48
    76 -52 77 -4 0 -14 -10 -22 -22z"/>
    </g>
    </svg>
  )
}

export default function StepProgressBar(props) {
  const visible = props.visible;
  const steps = props.steps;
  const array = [];
  for(let i=0; i < steps; i++) {
    array.push(i);
  }

  return (
    <>
      <div style={{ margin: 50 }}>
        <ProgressBar
          width={750}
          height={1}
          percent={100 * (visible / (steps - 1))}
          filledBackground="none"
        >
          {array.map((step, index) => {
            let cursor;
            if(index <= visible) {
              cursor = "pointer";
            } else {
              cursor = "default";
            }
            return (
              <Step
                position={100 * (index / steps)}
                transition="scale"
                children={({ accomplished }) => (
                  <>
                  {index < (steps - 1) ?
                  <div
                    onClick={() => props.handleBack(index)}
                    style={{
                      display: "flex",
                      cursor: cursor,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      width: 30,
                      height: 30,
                      color: "white",
                      backgroundColor: accomplished ? "white" : "rgba(255,255,255,.5)"
                    }}
                  >

                  </div>
                  : <div
                    onClick={() => props.handleBack(index)}
                    style={{
                      display: "flex",
                      cursor: cursor,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      width: 40,
                      height: 40,
                      color: "white",
                      backgroundColor: accomplished ? "transparent" : "transparent"
                    }}
                  >
                  {visible == steps - 1 ?
                  <Icon as={SVG} />
                  :
                  <Icon as={SVGtransparent} />
                  }
                  </div>
                  }
                  </>
                )}
              />
            );
          })}
        </ProgressBar>
      </div>
    </>
  );
}