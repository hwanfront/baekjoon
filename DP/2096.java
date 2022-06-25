import java.io.*;
import java.util.stream.Stream;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = Integer.parseInt(br.readLine());
        int[] max = new int[3];
        int[] min = new int[3];

        for(int i = 0; i < n; i++) {
            int[] s = Stream.of(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
            if(i == 0) {
                max[0] = s[0];
                min[0] = s[0];
                max[1] = s[1];
                min[1] = s[1];
                max[2] = s[2];
                min[2] = s[2];
            } else {
                int[] preMax = max.clone();
                int[] preMin = min.clone();
                max[0] = s[0] + Math.max(preMax[0], preMax[1]);
                min[0] = s[0] + Math.min(preMin[0], preMin[1]);
                max[1] = s[1] + Math.max(preMax[0], Math.max(preMax[1], preMax[2]));
                min[1] = s[1] + Math.min(preMin[0], Math.min(preMin[1], preMin[2]));
                max[2] = s[2] + Math.max(preMax[1], preMax[2]);
                min[2] = s[2] + Math.min(preMin[1], preMin[2]);
            }
        }

        bw.write(Math.max(max[0], Math.max(max[1], max[2])) + " ");
        bw.write(Math.min(min[0], Math.min(min[1], min[2])) + "\n");
        bw.flush();
        br.close();
        bw.close();
    }
}
