import { cardData } from "@/app/lib/definitions";

export default function TodoCard({
  data,
  onDragStart,
  isdrag = true,
  ondragend,
  duration,
  showTaskInfo,
  start,
  end,
}: {
  data: Array<cardData>;
  onDragStart?: Function;
  isdrag: boolean;
  ondragend?: Function;
  duration?: string;
  showTaskInfo?: Function;
  start?: string;
  end?: string;
}) {
  function handleClick() {
    showTaskInfo && showTaskInfo(data[0].id);
  }
  return (
    <div
      className="border-solid border-white todocard rounded-3xl p-2 m-1 flex text-xs flex-col
    "
      onClick={handleClick}
      draggable={isdrag}
      onDragStart={
        isdrag && onDragStart ? (e) => onDragStart(e, data[0].id) : undefined
      }
      onDragEnd={
        isdrag && ondragend ? (e) => ondragend(e, data[0].id) : undefined
      }
    >
      <div className="flex items-center">
        <p className="rounded-2xl mt-1 ms-1 me-1 px-2 py-1 text-white bg-btcolor">
          {data[0].rank}
        </p>
        {start && <p className="px-1">{start}</p>}
        {end && <p>{end}</p>}
      </div>
      <p className=" overflow-hidden p-3">{data[0].text}</p>
      {duration && <p>{duration}</p>}
    </div>
  );
}
