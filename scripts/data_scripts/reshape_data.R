### 512 fp
### handle duplicate rows by masking 0's with 1's 
### for the same species at the same location on the same date.

#setwd("C:/Users/rache/Dropbox/CSE512/project/wild flower")
data.v1 <- read.csv("flower.csv")
data.v2 <- data.v1
data.v2$uid <- paste(data.v1$Site, data.v1$Species, data.v1$Date)

data.v3 <- unique(data.v2)
dim(data.v3) #785 unique entries

# mask 0's if 1 exists
df = data.v3
for(i in 1:nrow(df)) {
  row = df[i,]
  if(row$uid %in% df$uid[-i] && row$Flower == 1){
    first_occur_index = which(df$uid == row$uid)[1]
    df[first_occur_index,]$Flower = 1
  }
}

keep = !duplicated(df$uid)
data.v4 = df[keep,]
write.csv(data.v4, file = "unique_masking.csv")

