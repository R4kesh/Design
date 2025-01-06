// import React from 'react';
// import styled from 'styled-components';

// const CardDrag = () => {
//   return (
//     <StyledWrapper>
//       <div className="card">
//         <div className="card-content">
//           <div className="card-top">
//             <span className="card-title">01.</span>
//             <p>Lightning.</p>
//           </div>
//           <div className="card-bottom">
//             <p>Hover Me?</p>
//             <svg width={32} viewBox="0 -960 960 960" height={32} xmlns="http://www.w3.org/2000/svg"><path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z" /></svg>
//           </div>
//         </div>
//         <div className="card-image">
//           <svg width={48} viewBox="0 -960 960 960" height={48} xmlns="http://www.w3.org/2000/svg"><path d="m393-165 279-335H492l36-286-253 366h154l-36 255Zm-73 85 40-280H160l360-520h80l-40 320h240L400-80h-80Zm153-395Z" /></svg>
//         </div>

//       </div>
      
//     </StyledWrapper>

    
//   );
// }

// const StyledWrapper = styled.div`
//   .card {
//     width: 320px;
//     background: #fff480;
//     color: black;
//     position: relative;
//     border-radius: 2.5em;
//     padding: 2em;
//     transition: transform 0.4s ease;
//   }

//   .card .card-content {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     gap: 5em;
//     height: 100%;
//     transition: transform 0.4s ease;
//   }

//   .card .card-top, .card .card-bottom {
//     display: flex;
//     justify-content: space-between;
//   }

//   .card .card-top p, .card .card-top .card-title, .card .card-bottom p, .card .card-bottom .card-title {
//     margin: 0;
//   }

//   .card .card-title {
//     font-weight: bold;
//   }

//   .card .card-top p, .card .card-bottom p {
//     font-weight: 600;
//   }

//   .card .card-bottom {
//     align-items: flex-end;
//   }

//   .card .card-image {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;
//     display: grid;
//     place-items: center;
//     pointer-events: none;
//   }

//   .card .card-image svg {
//     width: 4em;
//     height: 4em;
//     transition: transform 0.4s ease;
//   }

//   .card:hover {
//     cursor: pointer;
//     transform: scale(0.97);
//   }

//   .card:hover .card-content {
//     transform: scale(0.96);
//   }

//   .card:hover .card-image svg {
//     transform: scale(1.05);
//   }

//   .card:active {
//     transform: scale(0.9);
//   }`;

// export default CardDrag;


// import React from 'react';
// import styled from 'styled-components';

// const CardDrag = () => {
//   return (
//     <StyledWrapper>
//       <div className="card">
//         <div className="card-content">
//           <div className="card-top">
//             <span className="card-title">01.</span>
//             <p>Lightning.</p>
//           </div>
//           <div className="card-bottom">
//             <p>Hover Me?</p>
//             <svg
//               width={32}
//               viewBox="0 -960 960 960"
//               height={32}
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z" />
//             </svg>
//           </div>
//         </div>
//         <div className="card-image">
//           <svg
//             width={48}
//             viewBox="0 -960 960 960"
//             height={48}
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="m393-165 279-335H492l36-286-253 366h154l-36 255Zm-73 85 40-280H160l360-520h80l-40 320h240L400-80h-80Zm153-395Z" />
//           </svg>
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// };

// const CardGrid = () => {
//   return (
//     <GridWrapper>
//       <CardDrag />
//       <CardDrag />
//       <CardDrag />
//       <CardDrag />
//     </GridWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .card {
//     width: 320px;
//     background: #fff480;
//     color: black;
//     position: relative;
//     border-radius: 2.5em;
//     padding: 2em;
//     transition: transform 0.4s ease;
//   }

//   .card .card-content {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     gap: 5em;
//     height: 100%;
//     transition: transform 0.4s ease;
//   }

//   .card .card-top,
//   .card .card-bottom {
//     display: flex;
//     justify-content: space-between;
//   }

//   .card .card-top p,
//   .card .card-top .card-title,
//   .card .card-bottom p,
//   .card .card-bottom .card-title {
//     margin: 0;
//   }

//   .card .card-title {
//     font-weight: bold;
//   }

//   .card .card-top p,
//   .card .card-bottom p {
//     font-weight: 600;
//   }

//   .card .card-bottom {
//     align-items: flex-end;
//   }

//   .card .card-image {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;
//     display: grid;
//     place-items: center;
//     pointer-events: none;
//   }

//   .card .card-image svg {
//     width: 4em;
//     height: 4em;
//     transition: transform 0.4s ease;
//   }

//   .card:hover {
//     cursor: pointer;
//     transform: scale(0.97);
//   }

//   .card:hover .card-content {
//     transform: scale(0.96);
//   }

//   .card:hover .card-image svg {
//     transform: scale(1.05);
//   }

//   .card:active {
//     transform: scale(0.9);
//   }
// `;

// const GridWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
//   gap: 20px;
//   padding: 20px;
//   justify-items: center;
// `;

// export default CardGrid;


// import React from "react";
// import styled from "styled-components";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// // Sample card data
// const initialCards = [
//   { id: "1", title: "01.", subtitle: "Lightning" },
//   { id: "2", title: "02.", subtitle: "Thunder" },
//   { id: "3", title: "03.", subtitle: "Rain" },
//   { id: "4", title: "04.", subtitle: "Storm" },
// ];

// const CardDrag = ({ card }) => {
//   return (
//     <StyledWrapper>
//       <div className="card">
//         <div className="card-content">
//           <div className="card-top">
//             <span className="card-title">{card.title}</span>
//             <p>{card.subtitle}</p>
//           </div>
//           <div className="card-bottom">
//             <p>Hover Me?</p>
//             <svg
//               width={32}
//               viewBox="0 -960 960 960"
//               height={32}
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z" />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// };

// const CardGrid = () => {
//   const [cards, setCards] = React.useState(initialCards);

//   const handleDragEnd = (result) => {
//     if (!result.destination) return;

//     const reorderedCards = Array.from(cards);
//     const [removed] = reorderedCards.splice(result.source.index, 1);
//     reorderedCards.splice(result.destination.index, 0, removed);

//     setCards(reorderedCards);
//   };

//   return (
//     <DragDropContext onDragEnd={handleDragEnd}>
//       <Droppable droppableId="cards" direction="horizontal">
//         {(provided) => (
//           <GridWrapper
//             {...provided.droppableProps}
//             ref={provided.innerRef}
//           >
//             {cards.map((card, index) => (
//               <Draggable key={card.id} draggableId={card.id} index={index}>
//                 {(provided, snapshot) => (
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                     style={{
//                       ...provided.draggableProps.style,
//                       transform: snapshot.isDragging
//                         ? "scale(1.05) rotate(3deg)"
//                         : "none",
//                       transition: "transform 0.2s ease",
//                       opacity: snapshot.isDragging ? 0.7 : 1,
//                     }}
//                   >
//                     <CardDrag card={card} />
//                   </div>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </GridWrapper>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// const StyledWrapper = styled.div`
//   .card {
//     width: 320px;
//     background: #fff480;
//     color: black;
//     position: relative;
//     border-radius: 2.5em;
//     padding: 2em;
//     transition: transform 0.4s ease;
//   }

//   .card:hover {
//     cursor: pointer;
//     transform: scale(0.97);
//   }
// `;

// const GridWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
//   gap: 20px;
//   padding: 20px;
//   justify-items: center;
// `;

// export default CardGrid;

import React from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

// Sample card data
const initialCards = [
  { id: "1", title: "01.", subtitle: "Lightning" },
  { id: "2", title: "02.", subtitle: "Thunder" },
  { id: "3", title: "03.", subtitle: "Rain" },
  { id: "4", title: "04.", subtitle: "Storm" },
];

const CardDrag = ({ card }) => {
  return (
    <StyledCard>
      <div className="card-content">
        <div className="card-top">
          <span className="card-title">{card.title}</span>
          <p>{card.subtitle}</p>
        </div>
        <div className="card-bottom">
          <p>Hover Me?</p>
          <svg
            width={32}
            viewBox="0 -960 960 960"
            height={32}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z" />
          </svg>
        </div>
      </div>
    </StyledCard>
  );
};

const CardGrid = () => {
  const [cards, setCards] = React.useState(initialCards);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedCards = Array.from(cards);
    const [removed] = reorderedCards.splice(result.source.index, 1);
    reorderedCards.splice(result.destination.index, 0, removed);

    setCards(reorderedCards); // Update the state with the new card order
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="cards" direction="horizontal">
        {(provided) => (
          <GridWrapper
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {cards.map((card, index) => (
              <Draggable key={card.id} draggableId={card.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      ...provided.draggableProps.style,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <CardDrag card={card} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </GridWrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const StyledCard = styled.div`
  width: 320px;
  background: #f9f9f9;
  color: #333;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transform: translateZ(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  .card-content {
    padding: 20px;
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-title {
    font-size: 18px;
    font-weight: 600;
  }

  .card-bottom {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }

  /* Transition effects on drag */
  &.react-draggable-dragging {
    transform: scale(1.05) !important;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2) !important;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-items: center;
  position: relative;
  transition: all 0.3s ease;

  .react-beautiful-dnd-placeholder {
    visibility: visible !important;
    transition: background-color 0.2s ease;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    height: 100%;
    box-sizing: border-box;
  }

  .react-beautiful-dnd-droppable {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    transition: background-color 0.2s ease;
  }
`;

export default CardGrid;
