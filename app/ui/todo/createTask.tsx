export default function CreateTask() {
  return (
    <form>
      <label htmlFor="title">title : </label>
      <input type="text" id="title" name="title" />
      <label htmlFor="description">description : </label>
      <input type="text" id="description" name="description" />
      <label htmlFor="rank">Rank</label>
      <select name="rank" id="rank">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <label htmlFor="pomodoro">pomo</label>
      <select name="pomodoro" id="pomodoro">
        <option value="25/5">25/5</option>
        <option value="50/10">50/10</option>
      </select>
      <label htmlFor="pomoCount">pomoCount</label>
      <input type="number" id="pomoCount" name="pomoCount" />
    </form>
  );
}
