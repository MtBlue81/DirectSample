<?php
// TODO ちゃんとDBIを使いましょう(^_^;)
class Members {
    private $link;
    private $table_name = "memberlist";

    public function __construct() {
        $this->link = mysql_connect('localhost', 'user', 'password');
        //$this->link = mysql_connect('localhost', 'rdb_user');
        if (!$this->link) {
            die(mysql_error());
        }
        $db_selected = mysql_select_db('test_db', $this->link);
        if (!$db_selected) {
            die(mysql_error());
        }
    }

    public function __destruct() {
        mysql_close($this->link);
    }

    /**
     * 一覧取得
     * @remotable
     */
    public function getAll() {
        $result = mysql_query('select * from '.$this->table_name, $this->link);
        $rows = array();
        while ($row = mysql_fetch_assoc($result)) {
            $rows[] = $row;
        }
        mysql_free_result($result);
        return $this->success($rows);
    }

    /**
     * データ更新
     * @remotable
     */
    public function update($in) {
        $in = (array) $in;

        $set_data = array();
        $id = "";
        foreach ($in as $key => $value) {
            if ($key == "id") {
                $id = $value;
            } else {
                if ($key == "birth") {
                    $in[$key] = str_replace("T00:00:00", "", $value); //TODO ここはformat指定でなんとかなるはず
                    $value = $in[$key];
                }
                $set_data[] = "`".mysql_real_escape_string($key)."`='".mysql_real_escape_string($value)."'";
            }
        }
        $sql_update = "UPDATE `".$this->table_name."` SET ".join(",", $set_data)." WHERE `id` = ".$id;

        $result_update = mysql_query($sql_update, $this->link);
        if (!$result_update) {
            return $this->error($in);
        }
        return $this->success($in);
    }

    /**
     * データ削除.
     * @remotable
     */
    public function remove($in) {
        $in = (array) $in;
        mysql_set_charset('utf8');
        $sql_delete = "DELETE FROM `".$this->table_name."` WHERE `id` = ". $in["id"];
        $result_delete = mysql_query($sql_delete, $this->link);
        if (!$result_delete) {
            return $this->error($in);
        }
        return $this->success($in);
    }

    /**
     * 空データ追加.
     * @remotable
     */
    public function add($in){
        $in = (array) $in;
        mysql_set_charset('utf8');
        $sql_insert = "INSERT INTO `".$this->table_name."` (name) VALUES ('')";

        $result_insert = mysql_query($sql_insert, $this->link);
        if (!$result_insert) {
            return $this->error($in);
        }
        $in['id'] = mysql_insert_id();
        return $this->success($in);
    }

    private function error($data = array()) {
        return array(
            'success' => false,
            'data' => $data,
            'msg'  => mysql_error()
        );
    }
    private function success($data = array()) {
        return array(
            'success' => true,
            'data' => $data
        );
    }
}
