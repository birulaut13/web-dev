import Color from "../../../const/color";
import Th from "./th";

export default function Thead() {
  return (
    <thead style={{ backgroundColor: Color.primary, color: "white" }}>
      <tr>
        <Th>ID</Th>
        <Th>Role</Th>
        <Th>Username</Th>
        <Th>Telepon</Th>
        <Th>Status</Th>
        <Th>Aksi</Th>
      </tr>
    </thead>
  );
}
