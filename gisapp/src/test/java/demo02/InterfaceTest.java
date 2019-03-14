package demo02;

public class InterfaceTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String url = "http://172.17.6.187:8080/irsp/gisAction/queryGis";
		System.out.println(com.vi.util.HttpUtils.sendGet(url, "userId=QJW20"));
	}

}
