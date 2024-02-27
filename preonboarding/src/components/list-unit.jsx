import { useDispatch } from "react-redux";
import { removeContent } from "../features/content/contentSlice";

export default function ListUnit({ content, index }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeContent(index)); // 인덱스를 사용하여 삭제 액션 디스패치
  };

  return (
    <div className="input-container">
      <div className="input-field w-96">{content}</div>
      <button className="add-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
