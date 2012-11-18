<?php
    class EchoClass {
        /**
         * @remotable
         */
        public function call($string){
            return strtoupper($string);
        }

        /**
         * @remotable
         */
        public function who(){
            return $_SERVER;
        }
    }
?>
