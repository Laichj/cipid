package com.jweb.cupid.util;

import java.io.UnsupportedEncodingException;
import java.util.Base64;
import java.util.UUID;

/**
 * @author Aaron.Lai
 * @date 2018/8/13
 */
public class UUIDUtils {

    private static String getUUID(){
        return UUID.randomUUID().toString().replace("-","");

    }

    public static void main(String[] args)  {
//        byte[] textByte;
//        try {
//            textByte = getUUID().getBytes("UTF-8");
//        } catch (UnsupportedEncodingException e) {
//            e.printStackTrace();
//        }
//
//
//        System.out.println(Base64.getDecoder().decode("11")[0]);

//        System.out.println(StringToHex.convertHexToString(getUUID()));

//        UUID uuid = UUID.randomUUID();
//        System.out.println(uuid);
//        System.out.println(uuid.getLeastSignificantBits());
//        System.out.println(uuid.getMostSignificantBits());


        System.out.println("aaa".getBytes()[0]>>3);
        System.out.println(Integer.parseInt("a",16)<<2);;

    }

    /**
     * 16进制转换为Base64
     * @param hex
     * @return
     */
    public static String convertHexToString(String hex) {

        StringBuilder sb = new StringBuilder();
        StringBuilder temp = new StringBuilder();

        //49204c6f7665204a617661 split into two characters 49, 20, 4c...
        for (int i = 0; i < hex.length() - 1; i += 3) {

            //grab the hex in pairs
            String output = hex.substring(i, (i + 3));
            //convert hex to decimal
            int decimal = Integer.parseInt(output, 16);
            //convert the decimal to character
            sb.append((char) decimal);

            temp.append(decimal);
        }

        return sb.toString();
    }



}
