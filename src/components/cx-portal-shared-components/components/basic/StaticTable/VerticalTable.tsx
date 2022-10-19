import { TableType } from "./types";

export const VerticalTable = ({ data }: { data: TableType }) => (
  <table style={{ width: "100%", borderCollapse: "collapse" }}>
    <thead>
      <tr>
        {data.head.map((col, c) => (
          <th
            key={c}
            style={{
              backgroundColor: "#ecf0f4",
              textAlign: "left",
              padding: "10px 15px",
            }}
          >
            {col}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.body.map((row, r) => (
        <tr key={r}>
          {row.map((col, c) => (
            <td
              key={c}
              style={{
                padding: "10px 15px",
                borderBottom: "1px solid #f1f1f1",
              }}
            >
              {col}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
