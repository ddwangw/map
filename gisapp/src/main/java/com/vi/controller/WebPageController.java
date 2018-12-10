package com.vi.controller;

import java.util.HashMap;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebPageController {
	 /**
     * @param map
     * @return
     */
    @RequestMapping("/map")
    public String mapHtml(HashMap<String, Object> map) {
//        map.put("hello", "欢迎进入HTML页面");
        return "/GraphicIndex";
    }
    
    /**
     * @param map
     * @return
     */
    @RequestMapping("/videoTest")
    public String videoHtml(HashMap<String, Object> map) {
        return "/playview";
    }
}
