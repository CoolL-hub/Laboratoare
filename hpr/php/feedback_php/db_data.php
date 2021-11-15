<?php
            $mysqli = new mysqli('localhost', 'root', '07122001', 'teh_web');
            $result = $mysqli->query("SELECT * FROM site_feedback");

            $data = '<table border="1">
            <tr>
            <th>Nume</th>
            <th>Nota</th>
            <th>Părere</th>
            <th>Editare</th>
            </tr>';

            while($row = mysqli_fetch_array($result))
            {
                $data .= '<tr>
                <td>' . $row["name"] . '</td>
                <td>' . $row["mark"] . '</td>
                <td><button onclick="showFeed('.$row["id"].')">Check</button></td>
                <td><button onclick="editData('.$row["id"].')">Edit</button></td>
                </tr>';
            }
            $data .= '</table>';
            echo $data;

            mysqli_close($mysqli);
?>